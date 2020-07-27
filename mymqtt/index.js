console.log("index.js");

// var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
// or
// var client  = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

// var client  = mqtt.connect({ host:'mqtt.eclipse.org/mqtt', port: 443})
// or
var client  = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')

client.on('connect', function () {
    console.log('connected');
    // client.subscribe(sub_topic);
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  if(topic == sub_topic){
    appendData(topic,message);
  }
//   client.end()
})


function appendData(topic,messsage){
  let messageCont = document.getElementById("message");
  let cont = document.createElement("div");
  let topicCont = document.createElement("p");
  let payloadCont = document.createElement("p");
  payloadCont.setAttribute("class","p");

  topicCont.appendChild(document.createTextNode(topic));
  payloadCont.appendChild(document.createTextNode(messsage));

  cont.appendChild(topicCont);
  cont.appendChild(payloadCont);
  cont.setAttribute("class","hov");
  messageCont.appendChild(cont);
}

var sub_button = document.getElementById("sub-button");
var sub_topic = "";
var pub_button = document.getElementById('pub-button');
var topic_input = document.getElementById('topic-input');
var payload_input = document.getElementById("payload-input");
pub_button.addEventListener('click', () => {
  // console.log('clicked');
  // console.log(pub_input.value);
  client.publish(topic_input.value, payload_input.value)
  // topic_input.value = "";
})

sub_button.addEventListener("click",function(){
  sub_topic = document.getElementById("topic-input2").value;
  client.subscribe(sub_topic);
});