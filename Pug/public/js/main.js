$(document).ready(function() {
    const baseURL = "";
    //(string url , string method , object props )
    // This is a dynamic function
    const apiRequest = (url, method, props) => {
      return new Promise((resolve, reject) => {
  
  
        let ajaxConfig = {
          url: `${baseURL}${url}`,
          type: method,
          success: function(response) {
            //return the data in then clause
            resolve(response);
          },
          error: function(error) {
            //return the data in catch clause
            reject(error);
          }
        };
  
        if (method.toLowerCase() != "get") {
          ajaxConfig["data"] = props;
        }
        $.ajax(ajaxConfig);
      });
    };


    $('.del').click((e)=>{
        const id = e.target.dataset.id;
        apiRequest("/article/delete/" + id, "delete")
        .then(response =>{
            alert("Deleting Article");
            window.location.href = '/';
        }).catch(errorResponse =>{  
            console.log(errorResponse);
        });
    });

    $('.up').click((e)=>{
        const id = e.target.dataset.id;
        apiRequest("/article/"+ id +"/update","get")
        .then(response =>{
          window.location.href = '/';
        }).catch(errorResponse => {
          console.log(errorResponse);
        })
    });
});


  