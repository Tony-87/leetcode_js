
public class ArrayStack{
    private String [] items;
    private int count;
    private int n;

    // 初始化数组，申请一个大小为n的数组空间
    public ArrayStack(int n){
        this.items = new String[n];
        this.n = n;
        this.count = 0;
    }

    public boolean push(String item){
        if(this.count ==n){
            return false;
        }
        this.items[this.count] = item
        this.count ++;
        return true;
    }

    public String pop(){
        if(this.count ==0){
            return null;
        }
        String tmp = this.items[this.count - 1]
        this.count--;
        return tmp;
    }

}