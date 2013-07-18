'use strict'

describe('/index.html', function() {
 
    beforeEach(function() {
      browser().navigateTo('index.html')
    })

    it('H1 deve ser Quadro de Atividades', function() {
      expect(element('h1').text()).toEqual('Quadro de Atividades')
    })

    it ('Deve ter 9 THs no cabecalho', function() {
      expect(repeater('table thead th').count()).toBe(9)
    })
    
    it('Deve haver dentro das Theads em th os conteudos CAT, CKT e MAN', function(){
			expect(element('table thead tr th:nth-child(2)').text()).toEqual('CAT')
			expect(element('table thead tr th:nth-child(3)').text()).toEqual('CKT')
			expect(element('table thead tr th:nth-child(6)').text()).toEqual('MAN')
	})
	


})
