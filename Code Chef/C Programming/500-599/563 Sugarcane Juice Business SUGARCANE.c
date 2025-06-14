#include <stdio.h>
int main() 
{
    int t,n;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&n);
        printf("%d\n",((n*50*30)/100));
    }
	return 0;
}