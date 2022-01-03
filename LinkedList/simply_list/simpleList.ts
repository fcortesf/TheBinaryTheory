export class SimplyList<T> {
    private _head: Node<T>;
    private _length: number;

    constructor() {
        this._head = null;
        this._length = 0;
    }

    deleteHead() {
        if (!!this._head) {
            this._head = this._head.next;
            this._length--;
        }
    }

    insertHead(data: T) {
        const newNode = new Node<T>(data);
        newNode.next = this._head;
        this._head = newNode;
        this._length++;
    }

    deleteTail() {
        if(!this._head.next) {
            this._head = null;
            this._length = 0;
        } else {
            let currentNode = this._head;
            let prevValue = null;
            while(currentNode.next !== null) {
                prevValue = currentNode;
                currentNode = currentNode.next;
            }
            this._length--;
            prevValue.next = null;
        }
    }

    insertAtPosition(data: T, position: number) {
        const newNode = new Node<T>(data);
        if (position > this._length || position < 0) {
            return;
        }

        if (position === 0) {
            this.insertHead(data);
            return;
        }

        let currentNode = this._head;
        let prevNode = null;
        for(let i = 0; i < position; i++) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        newNode.next = currentNode;
        prevNode.next = newNode;
        this._length++;
    }

    deleteAtPosition(position: number) {
        if (position >= this._length || position < 0) {
            return;
        }
        if (position === 0) {
            this._head = this._head.next;
            this._length--;
            return;
        }
        let currentNode = this._head;
        let prevNode = null;
        for(let i = 0; i < position; i++) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = currentNode.next;
        this._length--;        
    }

    insertAfterValue(data: T, value: T) {
        let currentNode = this._head;
        while (currentNode !== null && currentNode.data !== value) {
            currentNode = currentNode.next;
        }
        if (currentNode !== null) {
            this.insertAfter(data, currentNode);
        }
    }

    deleteByValue(value: T) {
        if (!!this._head && this._head.data === value) {
            this._head = this._head.next;
            this._length --;
        }
        let currentNode = this._head;
        let prev = null;
        while (currentNode !== null && currentNode.data !== value) {
            prev = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode !== null) {
            this.deleteAfter(prev);
        }
    }

    private insertAfter(data: T, node: Node<T>) {
        const newNode = new Node<T>(data);
        newNode.next = node.next;
        node.next = newNode;
        this._length++;
    }

    private deleteAfter(node: Node<T>) {
        if (!!node.next) {
            node.next = node.next.next;
            this._length--;
        }
    }

    push(data: T) {
        const newNode = new Node<T>(data);
        if (!this._head){
            this._head = newNode;
            this._length++;
            return;
        }

        let currentNode = this._head;        
        while (currentNode !== null) {
            if (!currentNode.next) {
                currentNode.next = newNode;
                this._length++;
                currentNode = null;
            } else {
                currentNode = currentNode.next;
            }
        }
    }

    forEach(callbackForEach: (data: T) => void) {
        let currentNode = this._head;
        while (currentNode !== null) {
            callbackForEach(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    length() {
        return this._length;
    }

    count() {
        let currentNode = this._head;
        let length = 0;
        while (currentNode !== null) {
            length++;
            currentNode = currentNode.next;
        }
        return length;
    }

}

class Node<T> {
    public data: T;
    public next: Node<T>;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}