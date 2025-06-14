#include <stdio.h>
int main() 
{
    int t,n,m;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d",&n,&m);
        if(m==0)
        {
            printf("%d\n",(2*n));
        }
        else if(n>m)
        {
            printf("%d\n",((2*n)-m));
        }
        else
        {
            printf("%d\n",((n*2)-n));
        }
    }
	return 0;
}