#include <stdio.h>
int main() 
{
    int t,i,a,b;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d",&a,&b);
        if(a==b)
        {
            printf("%d\n",a);
        }
        else if(a>b)
        {
            printf("%d\n",b);
        }
        else
        {
            printf("%d\n",a);
        }
    }
	return 0;
}