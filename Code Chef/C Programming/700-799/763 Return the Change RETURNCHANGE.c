//denomination less than 10 INR stopped
//current smallest denomination(Currency)  --> 10

//chef goes to buy item with cost **not** multiple of 10
//then
//he will be charged cost nearest multiple of 10

//chef purchased an item with 'X' cost and gave bill of 100 INR


#include <stdio.h>
int main(void)
{
    int t,x;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&x);
        if(x==0||((x>=1)&&(x<=4)))
        {
            printf("100\n");
        }
        else if(x>=5 && x<=9)
        {
            printf("90\n");
        }
        else if( (x%10) == 0 )
        {
            printf("%d\n",(100-x));
        }
        //if last digit lies btwn 1 to 4 it will be decreased
        else if((x%10)>=1 && (x%10)<=4)
        {
            x=x-(x%10);
            printf("%d\n",(100-x));
        }
        //if last digit lies btwn 5 to 9 it will be increased
        else if((x%10)>=5)
        {
            x=x+(10-(x%10));
            printf("%d\n",(100-x));
        }
    }
	return 0;
}