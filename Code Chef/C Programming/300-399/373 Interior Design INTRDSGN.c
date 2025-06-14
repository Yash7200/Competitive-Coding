#include <stdio.h>
int main()
{
    int t,i,x1,x2,y1,y2;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d%d%d",&x1,&y1,&x2,&y2);
        if((x1+y1)<=(x2+y2))
        {
            printf("%d\n",(x1+y1));
        }
        else
        {
            printf("%d\n",(x2+y2));
        }
    }
	return 0;
}