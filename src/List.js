function List(){
  this.nodes = null;
}

function Node(value){
  this.value = function(){ return value; };
  this.addNext = function(next){ this.nextNode = next };
  this.next = function(){ return this.nextNode };
  this.last = function(){ return this.nextNode == null };
}

List.prototype.empty = function() {
  return this.nodes == null;
};

List.prototype.find = function(value) {
  if (this.empty()) return null;

  var current_node = this.nodes;
  while (current_node != null && current_node.value() != value){
    current_node = current_node.next();
  }

  return current_node;
};

List.prototype.add = function(value) {
  if (this.nodes == null){
    this.nodes = new Node(value);
    return;
  }

  var current_node = this.nodes;
  while(!current_node.last()){
    current_node = current_node.next();
  }
  current_node.addNext(new Node(value));

};

List.prototype.deleteElement = function(){
  return new Node();
}


