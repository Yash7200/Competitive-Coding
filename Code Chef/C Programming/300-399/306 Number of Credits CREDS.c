#include <stdio.h>
int main(void)
{
    int t,x,y,z,i;
    scanf("%d",&t);
    
    for (i=0;i<t;i++)
    {
        scanf("%d %d %d",&x,&y,&z);
        printf("%d\n",(4*x)+(2*y));
    }
    return 0;
}