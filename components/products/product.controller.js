(function(){
  angular
    .module('fctApp')
    .controller('productController', productController);

    function productController(productService,ImageService,Upload,sponsorService,$scope){

      var vm = this;
      vm.cloudObj = ImageService.getConfiguration();

      function init(){//Función de inicializar
        vm.products = productService.getProducts();
      }init();//Fin función

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
          photo: vm.photo
        }

        if(vm.products.length == 0){
          productService.setProducts(newProduct);
          clear();
          init();

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
             })
              return;
            }
            else{
              productService.setProducts(newProduct);
              clear();
              init();
              swal({
                type: 'success',
                title: '¡Registro completado!',
                timer: 3000,
                showConfirmButton: false
              })
              return;
            }
          }
       } //termina el else

      } // termina funcion guardar

        vm.getInfo = function(pProduct){//Función que modifica
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
        var productEdited = {
            status:'Activo',
            nameProduct: vm.nameProduct,
            brandProduct: vm.brandProduct,
            detailProduct: vm.detailProduct,
            productType: vm.productType,
            photo: vm.photo
        }

        swal({
         type: 'success',
         title: '¡Información actualizada!',
         timer: 3000,
         showConfirmButton: false
        })

        productService.updateProduct(productEdited);
        init();
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
        var productsList = productService.getProducts();
          for (var i = 0; i < productsList.length; i++) {//Inicia ciclo for
            if (productsList[i].nameProduct == pProduct.nameProduct) {//Inicia función if
              productsList[i].status = 'inhabilitado';
              console.log(productsList[i].status)
            }// Cierre del if
          }// Cierre del ciclo
        productService.updateState(productsList);
        init();
      }// Cierre de la funcion aprobación

      vm.active = function(pProduct){//Inicia función aprobación
        var productsList = productService.getProducts();
          for (var i = 0; i < productsList.length; i++) {
            if (productsList[i].nameProduct == pProduct.nameProduct) {
              productsList[i].status = 'Activo';
              console.log(productsList[i].status)
            }// Cierre del if
          }// Cierre del ciclo
        productService.updateState(productsList);
        init();
      }// Cierre de la funcion aprobación
    }
})();
