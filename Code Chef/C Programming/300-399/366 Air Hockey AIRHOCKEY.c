#include <stdio.h>
int main() 
{
    int t,i,a,b;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d",&a,&b);
        if(a>b)
        {
            printf("%d\n",(7-a));
        }
        else if(b>a)
        {
            printf("%d\n",(7-b));
        }
        else if(a==b)
        {
            printf("%d\n",(7-a));
        }
        else
        {
            printf("7\n");
        }
    }
	return 0;
}