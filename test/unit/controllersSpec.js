//use strict';       

describe("zenboard controllers", function() {
	
	describe("ZDViewCtrl", function() {

		it("Valor da primeira celula da tabela deve ser 1", function() {
			var scope = [],
			ctrl = new ZDViewCtrl(scope); 
			expect(scope.tickets[0].count).toBe("1");
		});

	});

});
 
