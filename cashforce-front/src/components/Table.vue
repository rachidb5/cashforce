<template>
  <div class="main">
    <v-column>
      <v-row>
        <img src="../assets/proposta.svg" />
        <h3>Notas fiscais</h3>
      </v-row>
      <span>Visualize as notas fiscais que você tem</span>
    </v-column>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">NOTA FISCAL</th>
          <th class="text-left">SACADO</th>
          <th class="text-left">CEDENTE</th>
          <th class="text-left">EMISSÃO</th>
          <th class="text-left">VALOR</th>
          <th class="text-left">STATUS</th>
          <th class="text-left">AÇÕES</th>
        </tr>
      </thead>
    </v-table>
    <div class="data-card" v-for="i in list">
      <v-table>
        <tbody>
          <tr>
            <td>{{ i.orderNfId }}</td>
            <td>{{ i.buyers.name }}</td>
            <td>{{ i.providers.name }}</td>
            <td>{{ dateFormat(i.createdAt) }}</td>
            <td class="green-text">R$ {{ (i.value/100).toFixed(2).toString().replace('.',',') }}</td>
            <td class="green-text">{{ statusDefine(i.orderStatusBuyer) }}</td>
            <td>
              <button elevation="2">Dados do cedente</button>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>
<style scoped>
.v-table .v-table__wrapper > table > thead > tr:last-child > th {
  border-bottom: none;
}
.green-text {
  color: #00ad8c;
}
button {
  border: 1px solid #cad3ff;
  padding: 5% 10% 5% 10%;
  border-radius: 25px;
}
button:hover {
  border: 1px solid #cad3ff;
  color: white;
  background-color: #cad3ff;
  padding: 5% 10% 5% 10%;
  border-radius: 25px;
}
td {
  padding: 0 !important;
  font-size: 12px !important;
  width: 140px;
  text-align: center;
}
th {
  padding: 0 !important;
  text-align: center !important;
  width: 140px;
}
tr {
  margin: 2%;
  border: 1px solid black;
}
.main {
  margin-top: 5%;
  margin-left: 2%;
  margin-right: 2%;
}
.v-row {
  margin-bottom: 0.5%;
}
img {
  margin-left: 2%;
  margin-right: 2%;
}
h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #021b51;
  line-height: 28px;
}
.data-card {
  border: 1px solid #dfe2eb;
  border-radius: 6px;
  margin-bottom: 1%;
}
span {
  color: #727d94;
  margin-top: 1rem !important;
  font-size: 14px;
}
.text-left {
  color: #a1a8b8;
  font-size: 12px;
  font-weight: 300;
}
.body-tr {
  border: 2px solid black !important;
  margin-bottom: 3%;
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async getList() {
      await axios
        .get("http://cashforce-back.fly.dev/orders")
        .then((response) => {
          this.list = response.data;
          console.log(response.data);
          console.log(this.list);
        })
        .catch((e) => console.log(e.response));
    },
    dateFormat(date) {
      return (
        date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4)
      );
    },
    statusDefine(s) {
      let statusList = [
        "Pendente de confirmação",
        "Pedido confirmado",
        "Não reconhece o pedido",
        "Mercadoria não recebida",
        "Recebida com avaria",
        "Devolvida",
        "Recebida com devolução parcial",
        "Recebida e confirmada",
        "Pagamento Autorizado",
      ];
      return statusList[s];
    },
  },
  beforeMount() {
    this.getList();
  },
};
</script>
