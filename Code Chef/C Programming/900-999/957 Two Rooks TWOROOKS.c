#include <stdio.h>
int main(void)
{
    int t,x1,y1,x2,y2;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d %d %d %d",&x1,&y1,&x2,&y2);
        if(x1==x2||y1==y2)
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
