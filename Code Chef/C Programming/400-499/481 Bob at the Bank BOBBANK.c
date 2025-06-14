#include <stdio.h>
int main()
{
    int t,j,i,w,x,y,z;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d%d%d",&w,&x,&y,&z);
        for(j=0;j<z;j++)
        {
            w=w+x-y;
        }
        printf("%d\n",w);
    }
	return 0;
}