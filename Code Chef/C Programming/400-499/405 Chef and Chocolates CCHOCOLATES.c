#include <stdio.h>
int main() 
{
    int t,i,x,y,z;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d%d",&x,&y,&z);
        printf("%d\n",(((5*x)+(10*y))/z));
    }
	return 0;
}