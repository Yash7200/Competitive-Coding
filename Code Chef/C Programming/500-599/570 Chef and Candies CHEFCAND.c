#include <stdio.h>
int main() 
{
    int t,n,x;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d",&n,&x);
        if(n<=x)
        {
            printf("0\n");
        }
        else
        {
            if(((n-x)%4)==0)
            {
                printf("%d\n",((n-x)/4));
            }
            else
            {
                printf("%d\n",(((n-x)/4)+1));
            }
        }
    }
	return 0;
}