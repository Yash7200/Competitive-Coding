#include <stdio.h>
int main() 
{
    int t,a,b,c,d;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d%d%d",&a,&b,&c,&d);
        if((a<=c)&&(b<=d))
        {
            printf("POSSIBLE\n");
        }
        else
        {
            printf("IMPOSSIBLE\n");
        }
    }
	return 0;
}