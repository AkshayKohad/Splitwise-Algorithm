//export {BinaryHeap}

class BinaryHeap{
    constructor(){
        this.heap = [];
    }

    size(){
        return this.heap.length;
    }

    empty(){
        if( this.size() === 0)
        return true;
        
        return false;
    }


    insert(value){
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp(){

        // in this approach what we do is since we insert new element
        // and just after that we use this function to operate, so in this we add new element at last
        // and start comparing it with parent and since we are making maxHeap, we will checking whether parent is greater
        // or less than curr_index if index is greater than it's parent it will swap it's position with parent and index becomes parent index,
        // and this goes on until index>0, so gives accurate position to new inserted value in index 
        let index = this.size()-1;

        while(index>0)
        {
            let element = this.heap[index];
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.heap[parentIndex];

            if(parent[0]>element[0])
            break;

            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }


    extractMax() {
        // It returns the max value present in Maxheap
        // And then uses Sinkdown to make MaxHeap stable
        const max = this.heap[0];
        const tmp = this.heap.pop();
        if(!this.empty())
        {
            this.heap[0] = tmp;
            this.sinkdown(0);
        }

        return max;
    }


    sinkDown(index) {
        // In bubble up we were going checking bottom to up and in this 
        // we go checking top to down because after ExtractMin we made last value of heap equal to first
        // so we need to make heap stable, so now we will be checking it's left and right child
        // For max value at top

        let left = 2 * index + 1,
         right = 2 * index + 2,
         largest = index;
         const length = this.size();

         if(left < length && this.heap[left][0] > this.heap[largest][0])
         {
             largest = left;
         }

         if(right < length && this.heap[right][0] > this.heap[largest][0])
         {
             largest = right;
         }

         //swap

         if(largest!== index)
         {
             let tmp = this.heap[largest];
             this.heap[largest] = this.heap[index];
             this.heap[index] = tmp;

             this.sinkDown(largest);
         }

    }


}