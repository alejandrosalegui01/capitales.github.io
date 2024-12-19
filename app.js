const { createApp } = Vue;

createApp({
  template: `
    <div>
      <h1>Lista de Capitales</h1>
     <table>
    <tr>
      <td><h2>Capital</h2></td>            
      <td><h2>Habitantes</h2></td>            
      <td><h2>País</h2></td>                 
      <td><h2>Continente</h2></td>
      <td><h2>Animal</h2></td>
      <td><h2>Deporte</h2></td>
      <td><h2>Bandera</h2></td>
      <td><h2>Moneda</h2></td>

      </tr> 
      <tr v-for="ciudad in paginatedCities" :key="ciudad.id">
        <td> {{ciudad.ciudad}} </td>
        <td> ({{ ciudad.habitantes.toLocaleString() }} habitantes)</td>
        <td> {{ ciudad.pais }} </td>
        <td> {{ ciudad.continente }} </td>
        <td> <img :src="ciudad.imagen" :alt="ciudad.ciudad" width="100" height="100" /> </td>
        <td> {{ ciudad.deporte }} </td>
        <td> <img :src="ciudad.imagenB" :alt="ciudad.ciudad" width="100" height="100" /> </td>
        <td> {{ ciudad.moneda }} </td>
    </tr>
      
    </tr>
  </table>

      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
      </div>
    </div>
  `,
  data() {
    return {
      cities: [
        { id: 1, ciudad: "Tokio", habitantes: 13929286, pais: "Japón", continente: "Asia", imagen: "imgC/tokio.webp", deporte:"Sumo", imagenB: "imgB/japon.webp", moneda:"Yenes"},
        { id: 2, ciudad: "Whasington DC", habitantes: 716269, pais: "Estados Unidos", continente: "América", imagen: "imgC/nuevaYork.webp",deporte:"Fútbol Americano", imagenB: "imgB/eeuu.webp", moneda:"Dólar estadounidense" },
        { id: 3, ciudad: "París", habitantes: 2140526, pais: "Francia", continente: "Europa", imagen: "imgC/paris.webp", deporte:"Fútbol", imagenB: "imgB/francia.webp" , moneda:"Euro"},
        { id: 4, ciudad: "Londres", habitantes: 8982000, pais: "Reino Unido", continente: "Europa", imagen: "imgC/inglesa.webp", deporte:"Fútbol", imagenB: "imgB/reinoUnido.webp", moneda:"Libra esterlina" },
        { id: 5, ciudad: "Sídney", habitantes: 5230330, pais: "Australia", continente: "Oceanía", imagen: "imgC/autralia.webp", deporte:"Footy", imagenB: "imgB/australia.webp", moneda:"Dólar australiano" },
        { id: 6, ciudad: "Ciudad del Cabo", habitantes: 433688, pais: "Sudáfrica", continente: "África", imagen: "imgC/sudafrica.webp", deporte:"Rugby", imagenB: "imgB/sudafrica.webp", moneda:"Rand" },
        { id: 7, ciudad: "Buenos Aires", habitantes: 3075646, pais: "Argentina", continente: "América", imagen: "imgC/argentina.webp", deporte:"Fútbol", imagenB: "imgB/argentina.webp", moneda:"Peso argentino" },
        { id: 8, ciudad: "Bangkok", habitantes: 10539000, pais: "Tailandia", continente: "Asia", imagen: "imgC/bankok.webp", deporte:"Muay Tai", imagenB: "imgB/tailandia.webp", moneda:"Baht" },
        { id: 9, ciudad: "Moscú", habitantes: 12635466, pais: "Rusia", continente: "Europa", imagen: "imgC/rusia.webp", deporte:"Baloncesto", imagenB: "imgB/rusia.webp", moneda:"Rublo" },
        { id: 10, ciudad: "Estambul", habitantes: 15462452, pais: "Turquía", continente: "Europa", imagen: "imgC/turquia.webp", deporte:"Yağlı güreş", imagenB: "imgB/turquia.webp", moneda:"Lira turca" },
        { id: 11, ciudad: "Ottawa", habitantes: 2348785, pais: "Canadá", continente: "América", imagen: "imgC/canada.webp", deporte:"Hockey", imagenB: "imgB/canada.webp", moneda:"Dólar canadiense" },
        { id: 12, ciudad: "Dubái", habitantes: 3331400, pais: "Emiratos Árabes Unidos", continente: "Asia", imagen: "imgC/arabe.webp", deporte:"Carrera de camellos", imagenB: "imgB/emiratos.webp", moneda:"Dírham" },
        { id: 13, ciudad: "Hong Kong", habitantes: 7481800, pais: "China", continente: "Asia", imagen: "imgC/hongKong.webp", deporte:"Ping Pong", imagenB: "imgB/hongKong.webp", moneda:"Dólar Hongkonés" },
        { id: 14, ciudad: "Madrid", habitantes: 3265038, pais: "España", continente: "Europa", imagen: "imgC/españa.webp", deporte:"Fútbol", imagenB: "imgB/españa.webp", moneda:"Euro" },
        { id: 15, ciudad: "Roma", habitantes: 2870500, pais: "Italia", continente: "Europa", imagen: "imgC/italia.webp", deporte:"Fútbol" , imagenB: "imgB/italia.webp", moneda:"Euro"},
        
      ],
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.cities.length / this.itemsPerPage);
    },
    paginatedCities() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.cities.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
}).mount('#app');
