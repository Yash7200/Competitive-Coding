#include <stdio.h>
int main() 
{
    int t,x;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&x);
        if(x<=100)
        {
            printf("%d\n",x);
        }
        else if(x<=1000)
        {
            printf("%d\n",(x-25));
        }
        else if(x<=5000)
        {
            printf("%d\n",(x-100));
        }
        else
        {
            printf("%d\n",(x-500));
        }
    }
	return 0;
}