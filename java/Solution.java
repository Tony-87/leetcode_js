public class Solution {
    public int regionsBySlashes(String[] grid) {
        int N = grid.length;
        int size = 4 * N * N;

        UnionFind unionFind = new UnionFind(size);
        for (int i = 0; i < N; i++) {
            char[] row = grid[i].toCharArray();
            for (int j = 0; j < N; j++) {
                // 二维网格转换为一维表格
                int index = 4 * (i * N + j);
                char c = row[j];
                // 单元格内合并
                if (c == '/') {
                    // 合并 0、3，合并 1、2
                    unionFind.union(index, index + 3);
                    unionFind.union(index + 1, index + 2);
                } else if (c == '\\') {
                    // 合并 0、1，合并 2、3
                    unionFind.union(index, index + 1);
                    unionFind.union(index + 2, index + 3);
                } else {
                    unionFind.union(index, index + 1);
                    unionFind.union(index + 1, index + 2);
                    unionFind.union(index + 2, index + 3);
                }

                // 单元格间合并
                // 向右合并：1（当前）、3（右一列）
                if (j + 1 < N) {
                    unionFind.union(index + 1, 4 * (i * N + j + 1) + 3);
                }
                // 向下合并：2（当前）、0（下一行）
                if (i + 1 < N) {
                    unionFind.union(index + 2, 4 * ((i + 1) * N + j));
                }
            }
        }
        return unionFind.getCount();
    }

    private class UnionFind {

        private int[] parent;

        private int count;

        public int getCount() {
            return count;
        }

        public UnionFind(int n) {
            this.count = n;
            this.parent = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = i;
            }
        }

        public int find(int x) {
            while (x != parent[x]) {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            return x;
        }

        public void union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);
            if (rootX == rootY) {
                return;
            }

            parent[rootX] = rootY;
            count--;
        }
    }
    // offer-53
    public int missingNumber(int [] nums){
        if(nums==null){
            return -1
        }
        int left = 0;
        int right = nums.length -1;
        while(left<=right){
            int mid = left + (right - left) / 2;
            if(nums[mid]==mid){
                left  = mid +1
            }else{
                right = mid -1
            }
        }
        return left
    } 
    public int longestConsecutive(int [] nums){
        final HashSet<Interger> mySet = new HashSet<Interger>{}();
        for(int i:nums) {mySet.add(i);}

        int longest = 0

        for(int i :nums){
            int length = 0;

            for(int j=i-1;mySet.contains(j);--j){
                mySet.remove(j);
                length++;
            }
            for(int j=i+1;mySet.contains(j);++j){
                mySet.remove(j);
                ++length;
            }
            longest = Math.max(longest,length);
        }
        return longest;
    }

    public int [] towSum(int [] nums,int target){
        final HashMap<Interger,Interger> myMap = new HashMap<Interger,Interger>();

        int [] result = new int [2];
        for(int i = 0;i<nums.length;i++){
            myMap.put(nums[i],i)
        }

        for(int i=0;i<nums.length;i++){
            final Interger v = myMap.get(target - nums[i]);
            if(v!=null && v>i){
                return new int []{i+1,v+1};
            }
        }
        return null;
    }
    static void main(){
        regionsBySlashes([2,2])
    }
} 