#include <stdio.h>
int main() 
{
    int t,x,y,z;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d%d",&x,&y,&z);
        if(((z%x)==0)&&((z%y)==0))
        {
            printf("ANY\n");
        }
        else if(((z%x)!=0)&&((z%y)!=0))
        {
            printf("NONE\n");
        }
        else if(((z%x)==0)&&((z%y)!=0))
        {
            printf("CHICKEN\n");
        }
        else if(((z%x)!=0)&&((z%y)==0))
        {
            printf("DUCK\n");
        }
    }
	return 0;
}