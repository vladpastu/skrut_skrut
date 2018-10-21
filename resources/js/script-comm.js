var getData = function() {
    var data;

    $.ajax({
       url : 'serv.php',
       type : 'GET',
       success : function(result){ 
          var data = jQuery.parseJSON(result);
            console.log(data);
       }
    });
// return data;
}

//$('#data').html(getData().data[0].name);

//var myRequest = new XMLHttpRequest();
//var method = "GET";
//var url = "serv.php";
//var asynchronous = true;
//
//myRequest.open(method, url, asynchronous);
//
//myRequest.send();
//
//myRequest.onload = function() {
//    if (this.readyState == 4 && this.status == 200) {
//        var data = JSON.parse(this.responseText);
//        console.log(data);
//        
//        var html = "";
//        
//        for(var i=0; i < data.length; i++) {
//            var name = data[i].author;
//            var content = data[i].content;
//            
//            html += "<div class=\"col span-1-of-3\">";
//            html += "<blockqoute>";
//                html += content;
//                html += "<cite>" + name + "</cite>";
//            html += "</blockqoute>";
//            html += "</div>";
//        }
//        
//        document.getElementById("comments").innerHTML = html;
//    }
//};