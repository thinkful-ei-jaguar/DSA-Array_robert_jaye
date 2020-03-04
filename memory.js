class Memory {
    constructor() {
      this.memory = new Float64Array(1024);
      this.head = 0;
    }
  
    allocate(size) {
      if (this.head + size > this.memory.length) {
        return null;
      }
  
      let start = this.head;
      //console.log(start);
      this.head += size;
      //console.log(this.head);
      return start;
    }
  
    free(ptr) {
        return !ptr;
    }
    push(value) {
        console.log(value)
        this._resize(this.head + 1);
        console.log(value)
        memory.set(this.memory + this.head, value);
        this.head++;
    }
    pop() {
        if (this.head == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.memory + this.head - 1);
        this.head--;
        return value;
    }
    remove(index) {
        if (index < 0 || index >= this.head) {
            throw new Error('Index error');
        }
        memory.copy(this.memory + index, this.memory + index + 1, this.head - index - 1);
        this.head--;
    }
    insert(index, value) {
        if (index < 0 || index >= this.head) {
            throw new Error('Index error');
        }

        if (this.head >= this._capacity) {
            this._resize((this.head + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.memory + index + 1, this.memory + index, this.head - index);
        memory.set(this.memory + index, value);
        this.head++;
    }
    _resize(size) {
        const oldPtr = this.memory;
        this.memory = this.allocate(size);
        if (this.memory === null) {
            throw new Error('Out of memory');
        }
        this.copy(this.memory, oldPtr, this.head);
        this.free(oldPtr);
    }
    copy(toIdx, fromIdx, size) {
      if (fromIdx === toIdx) {
        return;
      }
  
      if (fromIdx > toIdx) {
        // Iterate forwards
        for (let i = 0; i < size; i++) {
          this.set(toIdx + i, this.get(fromIdx + i));
        }
      } else {
        // Iterate backwards
        for (let i = size - 1; i >= 0; i--) {
          this.set(toIdx + i, this.get(fromIdx + i));
        }
      }
    }
 
    get(ptr) {
      return this.memory[ptr];
    }
  
    set(ptr, value) {
      this.memory[ptr] = value;
    }
  }
  
  module.exports = Memory;