<template>
  <div class="main">
    <v-column>
      <v-row>
        <img src="../assets/proposta.svg" />
        <h3>Notas fiscais</h3>
      </v-row>
      <span>Visualize as notas fiscais que você tem</span>
    </v-column>
    <table>
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
      <tbody>
        <tr v-for="i in list">
          <td>{{ i.orderNfId }}</td>
          <td>{{ i.buyers.name }}</td>
          <td>{{ i.providers.name }}</td>
          <td>{{ dateFormat(i.createdAt) }}</td>
          <td class="green-text">
            R$ {{ (i.value / 100).toFixed(2).toString().replace(".", ",") }}
          </td>
          <td class="green-text">{{ statusList[i.orderStatusBuyer] }}</td>
          <td>
            <button elevation="2" @click="openModal(i.providerId)">
              Dados do cedente
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="690">
        <template v-slot:activator="{ on, attrs }"> </template>
        <v-card>
          <v-spacer></v-spacer>
          <v-row justify="space-between">
            <v-column>
              <span>Nome</span>
              <span>{{ provider.name }}</span>
            </v-column>
            <v-column>
              <span>Trading name</span>
              <span>{{ provider.tradingName }}</span>
            </v-column>
            <v-column>
              <span>Nome</span>
              <span>{{ provider.name }}</span>
            </v-column>
          </v-row>
          <v-row justify="space-between">
            <v-column>
              <span>Nome</span>
              <span>{{ provider.name }}</span>
            </v-column>
            <v-column>
              <span>Trading name</span>
              <span>{{ provider.tradingName }}</span>
            </v-column>
            <v-column>
              <span>Nome</span>
              <span>{{ provider.name }}</span>
            </v-column>
          </v-row>
          <v-row justify="space-between">
            <v-column>
              <span>Nome</span>
              <span>{{ provider.name }}</span>
            </v-column>
            <v-column>
              <span>Trading name</span>
              <span>{{ provider.tradingName }}</span>
            </v-column>
            <v-column>
              <span>Nome</span>
              <span>{{ provider.name }}</span>
            </v-column>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              Fechar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<style scoped>
table {
  border-collapse: separate !important;
  border-spacing: 0 1rem;
}
td {
  padding: .5rem;
  font-size: 12px !important;
  text-align: center;
  border-top: 1px solid #dfe2eb;
  border-bottom: 1px solid #dfe2eb;
}
td:first-of-type {
  border-radius: .5rem 0 0 .5rem;
  border-left: 1px solid #dfe2eb;
}
td:last-of-type {
  border-radius: 0 .5rem .5rem 0;
  border-right: 1px solid #dfe2eb;
}
.v-card {
  padding: 1rem;
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
th {
  padding: 0 !important;
  text-align: center !important;
  width: 12%;
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
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      dialog: false,
      provider: {},
      statusList: [
        "Pendente de confirmação",
        "Pedido confirmado",
        "Não reconhece o pedido",
        "Mercadoria não recebida",
        "Recebida com avaria",
        "Devolvida",
        "Recebida com devolução parcial",
        "Recebida e confirmada",
        "Pagamento Autorizado",
      ],
    };
  },
  methods: {
    async getList() {
      await axios
        .get("https://cashforce-back.fly.dev/orders")
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
    async openModal(id) {
      this.dialog = true;
      await axios
        .get(`https://cashforce-back.fly.dev/provider/${id}`)
        .then((response) => {
          console.log(response.data);
          this.provider = response.data;
        })
        .catch((e) => console.log(e.response));
    },
  },
  beforeMount() {
    this.getList();
  },
};
</script>
