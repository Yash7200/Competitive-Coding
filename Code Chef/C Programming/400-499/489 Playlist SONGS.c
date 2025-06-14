#include <stdio.h>
int main() 
{
    int t,i,n,x,cnt,num;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d",&n,&x);
        cnt=0,num=0;
        while(n>=0)
        {
            n=n-x;
            if(n>=0)
            {
                cnt++;
                if((cnt%3)==0)
                {
                    num++;
                }
            }
        }
        printf("%d\n",num);
    }
	return 0;
}