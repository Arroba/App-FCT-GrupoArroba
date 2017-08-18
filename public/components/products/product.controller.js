(function(){
  angular
    .module('fctApp')
    .controller('productController', productController);
    productController.$inject = ['productService','ImageService','Upload','sponsorService','$scope'];

    function productController(productService,ImageService,Upload,sponsorService,$scope){

      var vm = this;
      vm.products = "";
      loadProducts();

      function loadProducts(){//Función de inicializar
        productService.getProducts().then(function(response){
          vm.products = response.data;
        });
        vm.cloudObj = ImageService.getConfiguration();
      }//Fin función



      $scope.pagina = 1;
      $scope.siguiente = function() {
        $scope.pagina = 2;
      }
      $scope.anterior = function() {
        $scope.pagina = 1;
      }
      $scope.registro1 = function() {
        $scope.pagina = 1;
      }
      // Inicio de la función presave
      vm.presave= function(newProduct){
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
            newProduct.photo = data.url;
            vm.save(newProduct);
          }); // Cierre de la función success
      } // Cierre de la función presave

      vm.save= function(){//Función de guardar
        var newProduct = {
          status:'Activo',
          nameProduct: vm.nameProduct,
          brandProduct: vm.brandProduct,
          detailProduct: vm.detailProduct,
          productType: vm.productType,
          photo: vm.photo,
          status: 'Activo'
        }

        if(vm.products.length == 0){
          productService.setProducts(newProduct);
          clear();
          loadProducts();

          swal({
            type: 'success',
            title: '¡Registro completado!',
            timer: 3000,
            showConfirmButton: false
          })
         return;
        }else{
          for(var i = 0; i < vm.products.length; i++){
            if(newProduct.nameProduct == vm.products[i].nameProduct){
             swal({
              type: 'error',
              title: '¡El nombre del producto ya existe!',
              timer: 3000,
              showConfirmButton: false
             }).then(
                function () {},
                // handling the promise rejection
                function (dismiss) {
                  if (dismiss === 'timer') {
                    console.log('El nombre de academia ya existe')
                  }
                }
              )
              return;
            }
            else{
              productService.setProducts(newProduct).then(function(response){
                vm.nameProduct = null;
                vm.brandProduct = null;
                vm.detailProduct = null;
                vm.productType = null;
                vm.photo = null;
                vm.status = null;
                loadProducts();
            });
              clear();
              swal({
                type: 'success',
                title: '¡Registro completado!',
                timer: 3000,
                showConfirmButton: false
              }).then(
                function () {},
                // handling the promise rejection
                function (dismiss) {
                  if (dismiss === 'timer') {
                    console.log('El nombre de academia ya existe')
                  }
                }
              )
              return;
            }
          }
        } //termina el else

      } // termina funcion guardar

        vm.getInfo = function(pProduct){//Función que modifica
        vm.id = pProduct._id;
        vm.nameProduct = pProduct.nameProduct;
        vm.brandProduct = pProduct.brandProduct;
        vm.detailProduct = pProduct.detailProduct;
        vm.productType = pProduct.productType;
        vm.photo = pProduct.photo;
      }//Fin función modificar

      //función que cambia boton segun la información para modificar
      vm.hideButton = function(){
        document.querySelector('#actualizar').classList.remove('displayNone');
        document.querySelector('#registrar').classList.add('displayNone');
      }

      vm.update = function(){//Función que actualiza
        document.querySelector('#actualizar').classList.add('displayNone');
        document.querySelector('#registrar').classList.remove('displayNone');
        var newProduct = {
            _id: vm.id,
            nameProduct: vm.nameProduct,
            brandProduct: vm.brandProduct,
            detailProduct: vm.detailProduct,
            productType: vm.productType,
            photo: vm.photo,
            status:'Activo',
        }
        swal({
         type: 'success',
         title: '¡Información actualizada!',
         timer: 3000,
         showConfirmButton: false
        }).then(
          function () {},
          // handling the promise rejection
          function (dismiss) {
            if (dismiss === 'timer') {
              console.log('Información actualizada')
            }
          }
        )
        productService.updateProduct(newProduct).then(function(response){
          productService.getProducts()
            .then(function(response){
              vm.products = response.data;
            })
            .catch(function(err){
              console.log(err);
            }) //función que actualiza el update (sabado tarde)
        });
        loadProducts();
        clear();
      }//Fin función que actualiza

      function clear(){//Función que limpia
        vm.nameProduct = '';
        vm.brandProduct = '';
        vm.detailProduct = '';
        vm.productType = '';
        vm.photo = '';
      }//Fin función que limpia

      vm.inactive = function(pProduct){//Inicia función aprobación
        pProduct.status = "Inhabilitado";
        productService.updateProduct(pProduct).then(function(response){
        });
      }// Cierre funcion inative

      vm.active = function(pProduct){//Inicia función aprobación
        pProduct.status = "Activo";
        productService.updateProduct(pProduct).then(function(response){
        });
      }// Cierre funcion inative
    }
})();
