#include <stdio.h>
int main() 
{
    int t,i,x,y;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d",&x,&y);
        if((100*x)<(10*y))
        {
            printf("Disposable\n");
        }
        else
        {
            printf("Cloth\n",(10*y));
        }
    }
	return 0;
}