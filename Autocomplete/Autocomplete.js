class TrieNode{
    constructor(){
        this.children={};
        this.isEnd=false;
    }
}

class Trie{

    constructor(){
        this.root=new TrieNode();
    }

    insert(word) {
        let node=this.root;
        for(let i=0;i<word.length;i++){
            if(!node.children[word[i]]){
                node.children[word[i]]=new TrieNode();
            }

            node=node.children[word[i]];
        }

        node.isEnd=true;

    }

    suggestRec(node,list,curr){

        if(node.isEnd){
            list.push(curr);
        }

        if (!Object.keys(node.children).length) {
            return;
          }

        for(let child in node.children){
            this.suggestRec(node.children[child],list,curr+child);
        }

    }

    suggest(prefix){
        let node=this.root;
        let curr="";

        for(let i=0;i<prefix.length;i++){
            if(!node.children[prefix[i]]){
                return [];
            }
            node=node.children[prefix[i]];
            curr+=prefix[i];
        }

        let list=[];
        this.suggestRec(node,list,curr);
        return list;
    }
}

let words = ["hello", "dog", "hell", "cat", "a", "hel","help","helps","helping"];
let trie = new Trie();
words.forEach((word) => trie.insert(word));

const input=document.getElementById("input--text");
input.addEventListener("keyup",suggestText);

function suggestText(e){
    if(e.target.value === "")return;

    const data=trie.suggest(e.target.value);

    document.getElementById("sugg").innerHTML=data.map((d)=>(
        console.log(d)
    ))
}


