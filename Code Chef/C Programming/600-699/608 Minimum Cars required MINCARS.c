#include <stdio.h>
int main() 
{
    int t,n;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&n);
        if(n<=4)
        {
            printf("1\n");
        }
        else
        {
            if((n%4)==0)
            {
                printf("%d\n",(n/4));
            }
            else
            {
                printf("%d\n",((n/4)+1));
            }
        }
    }
	return 0;
}