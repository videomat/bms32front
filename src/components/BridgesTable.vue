<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Silla nr</th>
        <th scope="col">Nimi</th>
        <th scope="col">Pikkus [m]</th>
        <th scope="col">Laius [m]</th>
        <th scope="col">Seisundiindeks</th>
        <th scope="col">Maakond</th>
        <th scope="col">Materjal</th>
      </tr>
      </thead>
      <tbody class="table-group-divider">
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<script>

export default {
  name: 'BridgesTable',

  data() {
    return {
      bridgeId: "0"
    }

  },
}
</script>


