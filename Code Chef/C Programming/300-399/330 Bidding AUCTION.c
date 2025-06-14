#include <stdio.h>

int main() 
{
    int t,i,a,b,c;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d%d",&a,&b,&c);
        if((a>b)&&(a>c))
        {
            printf("Alice\n");
        }
        else if((b>a)&&(b>c))
        {
            printf("Bob\n");
        }
        else if((c>a)&&(c>b))
        {
            printf("Charlie\n");
        }
    }
	return 0;
}