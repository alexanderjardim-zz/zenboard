'use strict';       

describe("zenboard controllers", function() {
	
	describe("ZDViewCtrl", function() {

		it("Valor da primeira celula da tabela deve ser 1", function() {
			var scope = [],
			ctrl = new ZDViewCtrl(scope); 
			expect(scope.tickets[0].count).toBe("1"); 
		});
	});
}); 
/*'use strict';   

describe("zenboard controllers", function() {
 
 describe("ZDViewCtrl", function() {
    var scope, ctrl, $httpBackend;
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('views/29639836.json').
          respond([{count: "21"}]);
 
      scope = $rootScope.$new();
      ctrl = $controller(ZDViewCtrl, {$scope: scope});
    }));


	it('Valor da primeira celula da tabela deve ser 1', function() {
	      expect(scope.tickets).toBeUndefined();
	      $httpBackend.flush();

	      expect(scope.tickets[0].count).toBe("1"); 
	});


  });
});*/