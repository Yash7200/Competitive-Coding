#include <stdio.h>
int main()
{
    int t,i,x,y,c;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d%d",&c,&x,&y);
        printf("%d\n",((c-x)*y));
    }
	return 0;
}