#include <stdio.h>
int main() 
{
    int t,i,n,x;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d",&n,&x);
        if(n<=6)
        {
            printf("%d\n",x);
        }
        else
        {
            if((n%6)==0)
            {
                printf("%d\n",((n/6)*x));
            }
            else
            {
                int cnt1,cnt2=0;
                while(n>=6)
                {
                    cnt1=n/6;
                    n=n%6;
                    if(n>0 && n<=6)
                    {
                        cnt2++;
                    }
                }
                printf("%d\n",(x*(cnt1+cnt2)));
            }
        }
    }
	return 0;
}