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
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in orders">
          <td>{{ i.orderNfId }}</td>
          <td>{{ i.buyers.name }}</td>
          <td>{{ i.providers.name }}</td>
          <td>{{ dateFormat(i.createdAt) }}</td>
          <td class="green-text">
            R$ {{ (i.value / 100).toFixed(2).toString().replace(".", ",") }}
          </td>
          <td class="green-text">{{ statusList[i.orderStatusBuyer] }}</td>
          <td>
            <button>
              Dados do cedente
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from 'vuex'

export default {
  computed: {
    orders() {
      return this.$store.state.orders;
    },
    provider() {
      return this.$store.state.provider;
    },
  },
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
    ...mapActions([
      'getList',
      'getProvider'
    ]),
    dateFormat(date) {
      return (
        date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4)
      );
    },
  },
  beforeMount() {
    this.getList();
  },
};
</script>

<style scoped>
.close-btn {
  padding: 0.5rem 1rem !important;
}
table {
  border-collapse: separate !important;
  border-spacing: 0 1rem;
}
td {
  padding: 0.5rem;
  font-size: 12px !important;
  text-align: center;
  border-top: 1px solid #dfe2eb;
  border-bottom: 1px solid #dfe2eb;
}
td:first-of-type {
  border-radius: 0.5rem 0 0 0.5rem;
  border-left: 1px solid #dfe2eb;
}
td:last-of-type {
  border-radius: 0 0.5rem 0.5rem 0;
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
