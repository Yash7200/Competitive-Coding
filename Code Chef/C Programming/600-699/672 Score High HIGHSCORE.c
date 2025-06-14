#include <stdio.h>
int main(void)
{
    int t,n,a,b,c,d,max;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d%d%d%d",&n,&a,&b,&c,&d);
        max=0;
        if(a>=max)
        {
            max=a;
        }
        if(b>=max)
        {
            max=b;
        }
        if(c>=max)
        {
            max=c;
        }
        if(d>=max)
        {
            max=d;
        }
        printf("%d\n",max);
    }
	return 0;
}