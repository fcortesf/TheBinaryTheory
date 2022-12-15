export class DoublyList<T> {
    private head: Node<T>;

    constructor() {
        this.head = null;
    }

    push(data: T){
        const newNode = new Node<T>(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let currentNode = this.head;
        while(!!currentNode) {
            const vnext = currentNode.next;
            if (!currentNode.next) {
                currentNode.next = newNode;
                newNode.prev = currentNode;
            }
            currentNode = vnext;
        }
    }

    forEach(callbackForEach: (data: T) => void) {
        let currentNode = this.head;
        while (currentNode !== null) {
            callbackForEach(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    count() {
        let currentNode = this.head;
        let length = 0;
        while (currentNode !== null) {
            length++;
            currentNode = currentNode.next;
        }
        return length;
    }

    deleteAtPosition(position: number) {
        if (position >= this.count() || position < 0) {
            return;
        }
        if (position === 0) {
            this.head = this.head.next;
            if (!!this.head) this.head.prev = null;
            return;
        }
        let currentNode = this.head;
        for(let i = 0; i < position; i++) {
            currentNode = currentNode.next;
        }        
        currentNode.prev.next = currentNode.next;
        if (!!currentNode.next) {
            currentNode.next.prev = currentNode.prev;   
        }
    }
}

class Node<T> {
    public data: T;
    public next: Node<T>;
    public prev: Node<T>;

    constructor(data: T) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}