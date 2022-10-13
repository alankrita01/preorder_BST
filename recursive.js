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
   
      
function preorder() {
    preorderRec(root);
}
   
      
function preorderRec(root){
    if (root != null) {

        console.log(root.key);
        preorderRec(root.left);
        preorderRec(root.right);
    }
}

    

insert(50);
insert(30);
insert(20);
insert(40);
insert(70);
insert(60);
insert(80);
 
        
preorder();

     