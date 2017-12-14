(function(){

	var app = angular.module('natal',[]);
	app.controller('PedidoController', function(){
		this.pedidos = pedidosStub;
	});

	var pedidosStub = [
		{
			nomeCrianca: 'Joãzinho',
			idade: '13 anos',
			pedido: 'Boneco transformers'
		},
		{
			nomeCrianca: 'Ary',
			idade: '9 anos',
			pedido: 'Steve do minecraft'
		}
	];
})();