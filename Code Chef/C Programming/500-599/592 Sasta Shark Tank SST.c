#include <stdio.h>
int main() 
{
    int t,a,b;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d",&a,&b);
        if(((100*a)/10)>((100*b)/20))
        {
            printf("FIRST\n");
        }
        else if(((100*a)/10)<((100*b)/20))
        {
            printf("SECOND\n");
        }
        else
        {
            printf("ANY\n");
        }
    }
	return 0;
}