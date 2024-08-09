// order from menu such that value becomes equal to 'p' & no. of items are minimum

    // 1st while loop is used to make 'p' equal to zero
    // for loop is used in reverse because we'll use big values first. We can also use it in regular manner for that you need to reverse write array in descending order 2048, ..., 1
        // we need minimum orders so it can be done by repeating specific order. In mathematical/logical terms it can be done by dividing
        // if any value can not directly get divided then we'll subtract it until that 'p' becomes smaller than that value so we've used while loop again
    // we need to stop for loop so
        /*if(p==0)
        {
             break;
        }*/
    //is used
//order from menu such that value becomes equal to 'p' & no. of items are minimum
#include <stdio.h>
int main(void)
{
    int t;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        int p,cnt=0,a[12]={1,2,4,8,16,32,64,128,256,512,1024,2048};
        scanf("%d",&p);
        while(p>0)
        {
            for(int j=11;j>-1;j--)
            {
                if( (p%a[j]) == 0)
                {
                    cnt=cnt+(p/a[j]);
                    p=p%a[j];
                }
                else if(p>a[j])
                {
                    while(p>a[j])
                    {
                        p=p-a[j];
                        cnt++;
                    }
                }
                if(p==0)
                {
                    break;
                }
            }
        }
        printf("%d\n",cnt);
    }
    return 0;
}