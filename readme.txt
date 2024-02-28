



    <script>
          const data = [100,200,300,400,500,600,700];
    var barColors = ["red", "green","blue","orange","brown"];

    new Chart(
      document.getElementById('myChart'),
      {
        type: 'line',
        data: {
          labels:['المنتجات','الطلبات','المشترين'],
          datasets: [
            {
              label: 'مقارنة بين عدد المبيعات و الطلبات و المشترين',
              data: data,
              backgroundColor:barColors
            }]
        }
      }
    );
  
    </script>