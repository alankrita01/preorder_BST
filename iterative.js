class Node {
     
  constructor(item) {
      this.key = item;
      this.left = this.right = null;
      
  }
}
 
    // Root of BST
var root = null;
 
  
function insert(key) {
  root = insertRec(root, key);
}
 
function insertRec(root , key) {
 
        
  if (root == null) {
      root = new Node(key);
      return root;
  }
 
        
  if (key < root.key)
      root.left = insertRec(root.left, key);
  else if (key > root.key)
      root.right = insertRec(root.right, key);
 
        
  return root;
}
 


    
function preorder(node){

  if(node==null)
    return;

  var stack = []
  stack.push(root);

  while(stack.length>0){

    var curr=stack[stack.length-1];
    
    document.write(curr.key+"<br>");
    stack.pop();

    if(curr.right!=null)
      stack.push(curr.right);
    
    if(curr.left!=null)
      stack.push(curr.left);
  }
}

  

insert(50);
insert(30);
insert(20);
insert(40);
insert(70);
insert(60);
insert(80);

      
preorder(root);