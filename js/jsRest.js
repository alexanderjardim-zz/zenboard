var dtType = "json";
var list_id = [];

function getValues(nameYesterday, nameToday, id){
	var nOld = "-";
	var nNew = "-";
	$.ajax({
		dataType: dtType,
		url: nameToday,
		beforeSend: function () {

			$.ajax({
				dataType: dtType,
				url: nameYesterday,
				error : function(){
					console.log("ops, erro!");
					nOld = "-";
				},
				success : function(dataO){
					console.log("eee, sucesso!");
					nOld = dataO.count;
				}
			});
		},
		error : function(){
			nNew = "-";
		},
		success : function (dataN) {
			nNew = dataN.count;
		},
		complete : function(){
			console.log(nNew + " " + id+ " " + nOld);
			updateValueTable(nOld, nNew, id);
		}
	});
}

$(function() {
	getListIdTable();
	for(var i = 0; i<list_id.length; i++){
		for(var j=0;j<=3;j++){
			var grupo = list_id[i]; 
			var name = grupo + (j*5);
			var id = "#" + name;
			y = getDateYesterday();
			t = getDateToday();
			nameToday = getNameFile(grupo, name, t);
			nameYesterday = getNameFile(grupo, name, y);
			getValues(nameYesterday, nameToday, id);
		}
	}
});

function updateValueTable(valueOld, valueNew, id){
	var color = "";
	if(valueOld>valueNew){
		color = "text-success";
	}else if(valueOld<valueNew){
		color = "text-error";
	}
	$(id).attr("class", color).html(valueNew);
}

function getDateToday(){
	var date = new Date();
	var day = date.getDate();
	if(day<10){
		day = "0"+day;
	}
	var month = (date.getMonth() + 1);
	if(month<10){
		month = "0" + month;
	}
	var year = date.getFullYear();
	return (day+""+month+""+year);
}

function getDateYesterday(){

	var myDate = new Date();
	var dayOfMonth = myDate.getDate();
	myDate.setDate(dayOfMonth - 1);
	var day = myDate.getDate();
	if(day<10){
		day = "0"+day;
	}
	var month = (myDate.getMonth() + 1);
	if(month<10){
		month = "0" + month;
	}
	var year = myDate.getFullYear();
	return (day+""+month+""+year);
}

function getNameFile(grupo, id, date){
	return "json/" + grupo + "/"+ id+ "_"+ date + ".json";
}

function getListIdTable(){
	var table = document.getElementById("table");
	for (var i=0; i<table.rows[0].cells.length-1; i++) {
			list_id[i] =  table.rows[0].cells[i+1].innerHTML.toLowerCase();
    }
    console.log(list_id);
}