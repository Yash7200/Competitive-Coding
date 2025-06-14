#include <stdio.h>
int main() 
{
    int t,i,y;
    float x;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%f%d",&x,&y);
        if(y<=(1.07*x))
        {
            printf("YES\n");
        }
        else
        {
            printf("NO\n");
        }
    }
	return 0;
}