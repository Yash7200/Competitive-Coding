#include <stdio.h>
int main() 
{
    int n,m,x,t,i;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d%d",&n,&m,&x);
        printf("%d\n",(((2*n)+(2*m))*x));
    }
	return 0;
}