//3 requirements
// 'x' --> min age
// 'y' --> max age (strictly less than this age)
// 'a' --> current age
// to fullfill criteria x<=a<y
#include <stdio.h>
int main() 
{
    int t,i,x,y,a;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d%d",&x,&y,&a);
        if((a>=x)&&(a<y))
        {
            printf("YES\n");
        }
        else
        {
            printf("NO\n");
        }
    }
	return 0;
}