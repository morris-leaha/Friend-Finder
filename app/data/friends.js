// (Adapted from 13.3-HotRestaurant in-class activity)
// ============ DATA ============

// Declare an empty array to 'store' all information

var friendArray = [
    {
        "name":"Ahmed",
        "photo":"https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Chloe",
        "photo":"https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        "scores":[
            5,
            2,
            3,
            4,
            4,
            4,
            2,
            3,
            2,
            5
          ]
      }      
];

// Export the array - make it accessible to other files using require

module.exports = friendArray;