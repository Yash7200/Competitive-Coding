#include <stdio.h>
int main() 
{
    int t,j,i,x,y,z,sum;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d%d",&x,&y,&z);
        printf("%d\n",(x*y*z));
    }
	return 0;
}