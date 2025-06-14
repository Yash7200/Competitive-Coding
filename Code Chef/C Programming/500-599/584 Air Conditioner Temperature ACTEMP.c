#include <stdio.h>
int main() 
{
    int t,a,b,c;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d%d",&a,&b,&c);
        if((b<a)||(b<c))
        {
            printf("No\n");
        }
        else
        {
            printf("Yes\n");
        }
    }
	return 0;
}